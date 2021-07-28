console.log("Fetch News from api");

let xhr=new XMLHttpRequest();
xhr.open('GET','https://webhose.io/filterWebContent?token=e8807253-cb8a-4a5f-a43d-c5b8d872173d&format=json&sort=crawled&q=%22stock%20market%22%20language%3Aenglish',true);

xhr.onload=function(){
  if(this.status === 200){
    let data=JSON.parse(this.responseText);
    let datao=data.posts;
    for(key in datao){

      console.log(datao[key].text);
    }
  }    
  else{
      console.log("Eroor is ther");
      console.log(this.status);
  }
}
xhr.send();

