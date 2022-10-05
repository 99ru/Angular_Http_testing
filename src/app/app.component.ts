import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CreateNewUser } from "./data";




@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts = []; 
  user: CreateNewUser = { firstName: "", email: "", lastName: "", password: "", userId: 0 };


  constructor(private http: HttpClient) {}

  // do when the page is loaded
  ngOnInit() {
    this.fetchPosts();
    this.fetchUsers();
  }

 // POST Http request
  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(
      "https://angular-udemy-d397a-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  // POST create new user
  createNewUser(postUser: CreateNewUser) { 
    this.http.post("https://angular-udemy-d397a-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    postUser
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  onFetchPosts() {}

  onClearPosts() {}

  // GET Http request
  private fetchPosts() {
    this.http.get("https://angular-udemy-d397a-default-rtdb.europe-west1.firebasedatabase.app/posts.json")
    .subscribe(posts => {
      console.log(posts);
    });
  }

  // GET new user Http request
  private fetchUsers() {
    this.http.get("https://angular-udemy-d397a-default-rtdb.europe-west1.firebasedatabase.app/users.json")
    .subscribe(users => {
      console.log(users);
    });
  }

}
