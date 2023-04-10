export class RestaurantOwner {

	restaurantId: number;
	restaurantName: string;
	restaurantMobile: string;
	ownerFirstName: string;
	ownerLastName: string;
	restaurantCity: string;
	restaurantState: string;
	restaurantPincode: string;
	email: string;
	password: string;
	role: string = "OWNER";

	login: {
		email: string;
		password: string;
		role: string;
	}
	dish: {
		dishName: string;
		dishType: string;
		dishImage: string;
		dishDescription: string;
		dishPrice: string;
	}
}