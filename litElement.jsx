class Page extends React.Component() {


  componentDidMount() {
    this.getMail();
  }


  getMail() {
    get(URL.GET_MailSTORY_URL, "").then(response => {
      console.log('response: ', response);
      this.setState({
        replyCount: response.data.replyCount,
        // mailList: response.data.data
      })
    })
  }

  onSubmit = () => {

  };
  render() {
    return (
      <div>
        <simple-greeting name="Everyone"></simple-greeting>
      </div>
    );
  }
}

export default Page;

