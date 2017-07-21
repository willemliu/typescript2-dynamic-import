async function loadModule(module: string) {
    return await import(module);
}

loadModule('./dist/module.js').then((myModule:any) => {
	console.debug(myModule);
	let module = new myModule.MyModule();
	module.test();
});
