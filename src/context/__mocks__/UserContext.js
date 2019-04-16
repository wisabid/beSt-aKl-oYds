const contextMock = ({
    Consumer(props) {
        return props.children({
            username : 'testuser',
            setuser() {
                return
            }
        })
    }
});
export default contextMock;