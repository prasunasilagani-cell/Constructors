//1.Amazon
class E_commerce{
    static platform_name="Amazon";
    static total_orders=0;
    constructor(productname,quant,price,productid,add){
      this.product_name=productname;
      this.quantity=quant;
      this.price=price;
      this.product_id=productid;
      this.address=add;
      E_commerce.total_orders+=1
    }
    displayAmzdetails(){
        console.log("E-commerce website:"+E_commerce.platform_name);
        console.log("Total Orders:"+E_commerce.total_orders);
        console.log("The product:"+this.product_name);
        console.log("Quantity:"+this.quantity);
         console.log("Price:"+this.price);
          console.log("Product Id:"+this.product_id);
           console.log("Address:"+this.address);
           console.log("==========================");
               
        }
}
let order1 = new E_commerce(101,"Rahul","Laptop",1,55000,"Hyderabad");
order1.displayAmzdetails();
let order2 = new E_commerce(102,"Priya","Headphones",2,2500,"Warangal");
order2.displayAmzdetails();
let order3 = new E_commerce(103,"Arjun","Smart Watch",1,3500,"Karimnagar");
order3.displayAmzdetails();


//2.Shopping 
class Shopping {
    static shop_Name = "Trends"
    static location = "Karimnagar"
    static category = "Clothing"
    constructor(customer_name, product, price, quantity) {
        this.myname = customer_name;
        this.myproduct = product;
        this.myprice = price;
        this.myquantity = quantity;
    }
    displayshopping() {
        console.log("Shop Name:"+Shopping.shop_Name)
        console.log("Location:"+Shopping.location)
        console.log("Category:"+ Shopping.category)
        console.log("Customer Name:"+ this.myname)
        console.log("Product:"+ this.myproduct)
        console.log("Price:"+ this.myprice)
        console.log("Quantity:"+ this.myquantity)
    }
}
let customer1 = new Shopping("Akshitha", "Dress", 1500, 2)
console.log("------customer1---------")
customer1.displayshopping()
let customer2 = new Shopping("Naresh", "Shirt", 1000, 3)
console.log("------customer2---------")
customer2.displayshopping()
let customer3 = new Shopping("Sai Rasagna", "Jeans", 1000, 1)
console.log("------customer3---------")
customer3.displayshopping()

//3.Hospital
class hospital {
    static hospital_Name = "Sunrise Hospital"
    static location = "Karimnagar"
    static department = "General"
    constructor(patient_name, patient_id, age, disease) {
        this.myname = patient_name;
        this.myId = patient_id;
        this.myage = age;
        this.mydisease = disease;
    }

    displaypatient() {
        console.log("Hospital:"+hospital.hospital_Name)
        console.log("Location:"+ hospital.location)
        console.log("Department:"+ hospital.department)
        console.log("Name:"+this.myname)
        console.log("ID:"+this.myId)
        console.log("Age:"+this.myage)
        console.log("Disease:"+ this.mydisease)
    }
}
let patient1 = new hospital("Harshini", 101, 21, "Fever");
console.log("------patient1---------")
patient1.displaypatient()
let patient2 = new hospital("Sanjay", 102, 22, "Dengue");
console.log("------patient2---------")
patient2.displaypatient()
let patient3 = new hospital("Divya Sree", 103, 20, "Migraine");
console.log("------patient3---------")
patient3.displaypatient()

//4.Movie
class Movie{
    static industry="Tollywood";
    static language="Telugu";
    constructor(movie,hero,heroine,director,rating,duration){
        this.title=movie;
        this.hero_name=hero;
        this.heroine_name=heroine;
        this.director_name=director;
        this.movie_rating=rating;
        this.movie_duration=duration;
    }
    display(){
        console.log("Movie Industry:"+Movie.industry);
        console.log("Language:"+Movie.language);
        console.log("Movie title:"+this.title);
        console.log("Hero:"+this.hero_name);
        console.log("Heroine:"+this.heroine_name);
        console.log("Director:"+this.director_name);
        console.log("Rating:"+this.movie_rating);
        console.log("Duration:"+this.movie_duration);
    }
}
let m1=new Movie("Darling","Prabhas","Kajal","Karunakaran",5,"2hr40min");
console.log("------Movie 1---------");
m1.display();
let m2=new Movie("Bahubali2","Prabhas","Anushka","Rajamouli",5,"2hr30min");
console.log("------Movie 2---------");
m2.display();
let m3=new Movie("Jersey","Nani","Shraddha","Goutham",4.5,"2hr40min");
console.log("------Movie 3---------");
m3.display();

//5.Library
class Library{
    static library_name="ABC Library";
    static location="Karimnagar";
    constructor(book,author,id,category,price,issuedto){
        this.book_name=book;
        this.author_name=author;
        this.book_id=id;
        this.book_category=category;
        this.book_price=price;
        this.person=issuedto;
    }
    displayperDetails(){
        console.log("Library:"+Library.library_name);
        console.log("Location:"+Library.location);
        console.log("Book Name:"+this.book_name);
        console.log("Author:"+this.author_name);
        console.log("Book Id:"+this.book_id);
        console.log("Category:"+this.book_category);
        console.log("Price:"+this.book_price);
        console.log("Issued To:"+this.person);
    }
}
let p1=new Library("JavaScript Programming","JohnSmith",101,"Programming",400,"Rahul")
console.log("----------Person1 Details------------");
p1.displayperDetails();
let p2=new Library("Wings of fire","A.P.J.Abdul Kalam",102,"Autobiograpghy",300,"Suresh")
console.log("----------Person2 Details------------");
p2.displayperDetails();
let p3=new Library("Harry Potter","J.K.Rowling",103,"Fanatsy",500,"Sashreek")
console.log("----------Person3 Details------------");
p3.displayperDetails();
let p4=new Library("Think and grow rich","Nappolean Hill",104,"Personal DEvelopment",450,"Ruchitha")
console.log("----------Person4 Details------------");
p4.displayperDetails();

//6.Bus
class Bus{
    static bus_company="TSRTC";
    static location="Telangana";
    constructor(psngr,src,dest,busno,seatno,fare){
        this.psngr_no=psngr;
        this.source=src;
        this.destination=dest;
        this.bus_no=busno;
        this.seat_no=seatno;
        this.fare=fare;
    }
    displaydetails(){
        console.log("Bus company:"+Bus.bus_company);
        console.log("Location:"+Bus.location);
        console.log("Passenger:"+this.psngr_no);
        console.log("Source:"+this.source);
        console.log("Destination:"+this.destination);
        console.log("Bus no.:"+this.bus_no);
        console.log("Seat no.:"+this.seat_no);
        console.log("Ticket Amount:"+this.fare);
    }
}
let psngr1=new Bus("Ramesh","Karimnagar","Hyderabad","TS012345",12,270)
console.log("------Passenger1--------");
psngr1.displaydetails();
let psngr2=new Bus("Naresh","Karimnagar","Husnabad","TS036545",19,100)
console.log("------Passenger2--------");
psngr2.displaydetails();
let psngr3=new Bus("Srilatha","Nizambad","Siddipet","TS054572",20,300)
console.log("------Passenger3--------");
psngr3.displaydetails();
let psngr4=new Bus("Sanjana","Karimnagar","Alwal","TS017855",23,200)
console.log("------Passenger4--------");
psngr4.displaydetails();
