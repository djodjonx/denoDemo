 
self.onmessage = (e) => {
  const { url, name, filename } = e.data;
  setTimeout(async () => {
    console.log('===================worker execute delayed===================')
    console.log(url);
    console.log(name);
    const text = await Deno.readTextFile(filename);
    console.log(text)
    console.log('===================worker execute end===================')
  }, 2000)
};