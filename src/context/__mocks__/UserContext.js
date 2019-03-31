const contextMock = ({
    Consumer(props) {
        return props.children({
            username : 'AlfAlvin'
        })
    }
});
export default contextMock;