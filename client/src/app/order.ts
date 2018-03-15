export class Order{
	constructor (
		public size: string = "",
		public due_date: Date = new Date(),
		public colors: [],
		public message: string = "",
		public add_ons: [],
		public florist_name: string = "",
		public shipping: boolean = True,
		public recipient: string = "",
		public address1: string = "",
		public address2: string = "",
		public city: string = "",
		public state: string = "",
		public zip: number = 0,
		public created_at: Date = new Date(),
		public updated_at: Date = new Date()
	){}
}