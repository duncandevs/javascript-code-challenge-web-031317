class CommentList{
  constructor(comments=[]){
    this.comments = comments
  }

  render(){
    return `<ul>${this.comments.reduce(function(acc,val){
      return acc + val.render()
    },"")}</ul>`
  }

  addComment(string){
    this.comments.push(new Comment(string))
  }
}
