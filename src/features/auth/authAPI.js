export function fetchCount(amount = 1) {
  return new Promise(async (resolve) =>{
    const responce = await fetch('http://loclhost:8080')
    const data = await responce.json()
    resolve({data})
  }
  );
}
