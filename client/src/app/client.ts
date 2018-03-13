export class Client {
	constructor (
		public firstname: string = "",
		public lastname: string = "",
		public company: string = "",
		public email: string = "",
		password: string = "",
		phone: number = 0, 
		public level: number = 1,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}