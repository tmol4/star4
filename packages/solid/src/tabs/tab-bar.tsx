import { createEffect, createMemo, createReaction, createSelector, createSignal, For, on, Show, splitProps, type Component, type FlowComponent, type JSX, type Ref, type Signal } from "solid-js";
import { createToken, resolveTokens } from "@solid-primitives/jsx-tokenizer";
import { TabToken } from "./tab-token";
import { styles } from "./tab-bar.css";
import { TabIndicator } from "./tab-indicator";
import { Tab } from "./tab";
import { Refs } from "@solid-primitives/refs";
import { THEME } from "@star4/vanilla-extract";
import { Lenis } from "../lenis";
import { createResizeObserver } from "@solid-primitives/resize-observer";
import { leadingAndTrailing, throttle } from "@solid-primitives/scheduled";
import { createStore } from "solid-js/store";

export namespace TabBar {
  export type Props = {
    value: string | number | symbol;
    onChange?: (value: string | number | symbol) => void;
  }
}

const globalToLocal = (parent: DOMRect, child: DOMRect): DOMRect => {
  return new DOMRect(
    child.x - parent.x,
    child.y - parent.y,
    child.width,
    child.height,
  );
}

const getVarName = (variable: string) => {
  const matches = variable.match(/^var\((.*)\)$/);
  return matches?.[1] ?? variable;
}

const resolveProperty = (property: string, element: Element) => {
  return getComputedStyle(element).getPropertyValue(getVarName(property));
}

const enum ScrollableState {
  IDLE,
  INITIAL,
  UPDATE,
}

type ScrollableStore = {
  state: ScrollableState;
  scrollable: boolean;
}

export const TabBar: FlowComponent<TabBar.Props> = (props) => {
  const [local, others] = splitProps(
    props,
    ["value", "onChange", "children"],
  );

  const tokens = resolveTokens(
    TabToken,
    () => local.children,
    { includeJSXElements: false },
  );

  const isSelected = createSelector(() => local.value);

  let wrapperRef!: HTMLElement;
  let contentRef!: HTMLElement;
  const [refs, setRefs] = createSignal<HTMLElement[]>([]);

  let indicatorRef!: HTMLElement;

  let lenisRef!: Lenis.Element;

  const [state, setState] = createStore<ScrollableStore>({
    scrollable: false,
    state: ScrollableState.IDLE,
  })

  const updateScrollable = leadingAndTrailing(
    throttle,
    () => {
      if(state.state === ScrollableState.IDLE) {
        setState("state", ScrollableState.INITIAL);
      } else if(state.state === ScrollableState.INITIAL) {
        setState("state", ScrollableState.UPDATE);
      }
      setState("scrollable", wrapperRef.scrollWidth > wrapperRef.clientWidth)
    },
    250,
  );

  createResizeObserver(() => wrapperRef, updateScrollable);

  createEffect(
    on(
      [() => local.value, refs],
      ([nextValue], prev) => {
        if(prev === undefined) return;
        const [prevValue] = prev;

        const tabs = tokens();
        const elements = refs();
        const prevTab = elements.find(
          (tab, i) => tabs[i].data.value === prevValue,
        );
        const nextTab = elements.find(
          (tab, i) => tabs[i].data.value === nextValue,
        );

        if(!prevTab || !nextTab) return;

        const indicator = indicatorRef; //? replace with a signal?

        const prevRect = prevTab.getBoundingClientRect();
        const nextRect = nextTab.getBoundingClientRect();

        if(nextValue !== prevValue) {
          const rect = wrapperRef.getBoundingClientRect();
          if(nextRect.left < rect.left || nextRect.right > rect.right) {
            lenisRef.instance.scrollTo(
              nextTab,
              {
                duration: 0.3,
                // lerp: 1,
                force: true,
                // easing: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
              },
            );
          }
        }

        const relativeRect = globalToLocal(nextRect, prevRect);
        const prevLeft = relativeRect.left;
        const prevRight = nextRect.width - relativeRect.right;


        const easing = resolveProperty(THEME.motion.easing.emphasized, indicator);
        const options: KeyframeAnimationOptions = {
          composite: "accumulate",
          easing,
          duration: 500,
          fill: "none",
        };

        indicator.animate({
          left: [`${prevLeft}px`, "0"],
          right: [`${prevRight}px`, "0"],
        }, options);
      },
    ),
  );

  return (
    <Lenis
      ref={lenisRef}
      wrapper={() => wrapperRef}
      content={() => contentRef}
      options={{
        // overscroll: true,
        orientation: "horizontal",
      }}>
      <div
        ref={wrapperRef as HTMLDivElement}
        class={
          styles.container({
            scrollable: state.scrollable,
            animate: state.state === ScrollableState.UPDATE,
          })
        }
        role="tablist">
          <div ref={contentRef as HTMLDivElement} style={{ display: "contents" }}>
            <Refs ref={setRefs}>
              <For each={tokens()}>{
                ({ data: tab }, index) => (
                  <Tab
                    data-index={index()}
                    onClick={() => local.onChange?.(tab.value)}
                    selected={isSelected(tab.value)}
                    icon={tab.icon}
                    label={tab.label}
                    indicator={
                      <Show when={isSelected(tab.value)}>
                        <TabIndicator ref={indicatorRef} />
                      </Show>
                    } />
                )
              }</For>
          </Refs>
          </div>
      </div>
    </Lenis>
  );
}

