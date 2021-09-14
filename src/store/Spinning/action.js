import { HIDDEN, SHOW } from "./constant";

const showSpinning = () => ({
  type: SHOW
});
const hiddenSpinning = () => ({
  type: HIDDEN
});
export { showSpinning, hiddenSpinning };
