package com.adobe.theforce.entity;

public enum Enums {
	
	PENDING {
		@Override
		public String toString(){
			return "Pending";
		}
	},
	CONFIRMED {
		@Override
		public String toString(){
			return "Confirmed";
		}
	},
	CANCELLED {
		@Override
		public String toString(){
			return "Cancelled";
		}
	},
	MR {
		@Override
		public String toString(){
			return "Mr.";
		}
	},
	MISS {
		@Override
		public String toString(){
			return "Miss";
		}
	},
	MRS {
		@Override
		public String toString(){
			return "Mrs.";
		}
	},
	CASH {
		@Override
		public String toString(){
			return "Cash";
		}
	},
	CHEQUE {
		@Override
		public String toString(){
			return "Cheque";
		}
	};
	
}
