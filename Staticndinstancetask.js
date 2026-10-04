//1.Amazon
class E_commerce{
    static platformname="Amazon";
    static totalorders=0;
    set_data1(productname,quantity,price,productid,address){
      this.Product_name=productname;
      this.Quantity=quantity;
      this.Price=price;
      this.product_id=productid;
      this.Address=address;
      E_commerce.totalorders+=1
    }
    displayAmzdetails(){
        console.log("E-commerce website:",E_commerce.platformname);
        console.log("Total Orders:",E_commerce.totalorders);
        console.log("The product:",this.Product_name);
        console.log("Quantity:",this.Quantity);
         console.log("Price:",this.Price);
          console.log("Product Id:",this.product_id);
           console.log("Address:",this.Address);
           console.log("==========================");
               
        }
}
let order1 = new E_commerce();
order1.set_data1(101,"Rahul","Laptop",1,55000,"Hyderabad");
order1.displayAmzdetails();
let order2 = new E_commerce();
order2.set_data1(102,"Priya","Headphones",2,2500,"Warangal");
order2.displayAmzdetails();
let order3 = new E_commerce();
order3.set_data1(103,"Arjun","Smart Watch",1,3500,"Karimnagar");
order3.displayAmzdetails();


//2.Shopping 
class Shopping {

    static shopName = "Trends"
    static location = "Karimnagar"
    static category = "Clothing"

    get_dataa(customer_name, product, price, quantity) {
        this.myname = customer_name;
        this.myproduct = product;
        this.myprice = price;
        this.myquantity = quantity;
    }

    displayshopping() {
        console.log("Shop Name:", Shopping.shopName)
        console.log("Location:", Shopping.location)
        console.log("Category:", Shopping.category)
        console.log("Customer Name:", this.myname)
        console.log("Product:", this.myproduct)
        console.log("Price:", this.myprice)
        console.log("Quantity:", this.myquantity)
    }
}

let customer1 = new Shopping()

console.log("------customer1---------")
customer1.get_dataa("Akshitha", "Dress", 1500, 2)
customer1.displayshopping()


let customer2 = new Shopping()

console.log("------customer2---------")
customer2.get_dataa("Naresh", "Shirt", 1000, 3)
customer2.displayshopping()


let customer3 = new Shopping()

console.log("------customer3---------")
customer3.get_dataa("Sai Rasagna", "Jeans", 1000, 1)
customer3.displayshopping()

//3.Hospital
class hospital {

    static hospitalName = "ABC Hospital"
    static location = "Karimnagar"
    static department = "General"

    get_data2(patient_name, patient_id, age, disease) {
        this.myname = patient_name;
        this.myId = patient_id;
        this.myage = age;
        this.mydisease = disease;
    }

    displaypatient() {
        console.log("Hospital:", hospital.hospitalName)
        console.log("Location:", hospital.location)
        console.log("Department:", hospital.department)
        console.log("Name:", this.myname)
        console.log("ID:", this.myId)
        console.log("Age:", this.myage)
        console.log("Disease:", this.mydisease)
    }
}

let patient1 = new hospital();
console.log("------patient1---------")
patient1.get_data2("Harshini", 101, 21, "Fever")
patient1.displaypatient()


let patient2 = new hospital();
console.log("------patient2---------")
patient2.get_data2("Sanjay", 102, 22, "Dengue")
patient2.displaypatient()


let patient3 = new hospital();
console.log("------patient3---------")
patient3.get_data2("divya Sree", 103, 20, "Migraine")
patient3.displaypatient()
