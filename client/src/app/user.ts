export class User {
	constructor (
		public firstname: string = "",
		public lastname: string = "",
		public email: string = "",
		password: string = "",
		public level: number = 1,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}