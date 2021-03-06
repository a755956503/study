/**ddsd
 * 如果现有的接口已经能够正常工作，那我们就永远不会用上适配器模式。
 *适配器模式是一种 “亡羊补牢”的模式，没有人会在程序的设计之初就使用它。
 *因为没有人可以完全预料到未来的事情，也许现在好好工作的接口，未来的某天却不再适用于新系统，那么我们可以用适配器模式 把旧接口包装成一个新的接口，使它继续保持生命力。
 */
const A = {}
function DoA(A) {}

// 后来有了doA2,但是doA2和A不兼容，假设DoA2在其他地方定义，不好修改。
// 或者有了DoA(B),但是B和DoA不兼容

// DoA2(adapterToA(B))