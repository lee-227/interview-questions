## 与 React Hooks 的区别
### React Hook
1. 不要在循环，条件或嵌套函数中调用 Hook
2. 确保总是在你的 React 函数的最顶层调用他们。
3. 遵守这条规则，你就能确保 Hook 在每一次渲染中都按照同样的顺序被调用。
4. 这让 React 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。

### Vue Hook
1. 拥有与 React 相同的逻辑组合功能
2. setup 只调用一次，性能较好。
3. 对调用顺序没什么要求，每次渲染中不会反复调用 Hook 函数，产生的的 GC 压力较小。
4. 不必考虑几乎总是需要 useCallback 的问题，以防止传递函数prop给子组件的引用变化，导致无必要的重新渲染。
5. React Hook 有闭包陷阱问题，如果用户忘记传递正确的依赖项数组，useEffect 和 useMemo 可能会捕获过时的变量。
6. Vue 的自动依赖关系跟踪确保观察者和计算值始终正确无误。
7. React Hook 里的「依赖」是需要你去手动声明的