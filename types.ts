
export type User =  {
    id  :number;     
    name   :string;
    lastName : string;
    email  :  string  ;
    password :string;
    comments :Comment[];
    likes   : number
  };
  
  export type Blog =  {
    image: string | undefined;
    id :number;
    title      :string;
    content   : string;
    category   : string  ;
    designer :  string;  
    designerId :number;
    comments  : Comment[];
    likes     : Likes[];
    categoryId : number;
    images    : Image[];
  };
  
 export type Category =  {
    id    :number ;   
    name  : string;
    blogs:  Blog[]
  };
  
export type Designer = {
    id :number;
    fullName  :string ;
    blogs    :Blog[];
    blogId  : number
  };
  
 export type  Comment =  {
    id : number;
    comment : string;
    user   : User ;
    blog   : Blog   ;
    userId  :number;
    blogId :number
  };
  
 export type Likes = {
    id   :number;
    user  : User ;
    blog  : Blog ;
    userId :number;
    blogId : number
  };
  
  export type  Image =  {
    id     :number;
    image  : string;
    blog  : Blog  ;
    blogId :number
  };
  