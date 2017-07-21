export class MyModule {
	private debug: HTMLElement|null = (<HTMLElement>document.querySelector('.debug'));
	
	constructor() {
		console.debug('MyModule constructor called');
		this.appendDebug('MyModule constructor called<br>');
	}
	
	test() {
		console.debug('MyModule test() called');
		this.appendDebug('MyModule test() called<br>');
	}
	
	appendDebug(msg: string) {
		if(this.debug) {
			this.debug.innerHTML += msg;
		}
	}
}