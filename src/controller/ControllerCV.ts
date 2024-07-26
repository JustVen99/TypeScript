import { RenderCV,getUser } from "../view/Viewcv";

async function showCv(){
  await RenderCV();
  await getUser();
}
export {showCv};