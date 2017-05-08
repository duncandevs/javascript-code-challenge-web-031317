class Comment{
  constructor(body){
    this.body = body
  }

  render(){
    return `<li>${this.body}</li>`
  }
}
