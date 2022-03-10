export const domPrint = (msg: any,prefix?:string) => {
  const root = document.getElementById("root");
  const els = root.getElementsByTagName("div") || [];
  const div = document.createElement("div");
  div.innerHTML = `【${prefix??'id:'+(els.length+1)}】` + JSON.stringify(msg);
  root.append(div);
};
