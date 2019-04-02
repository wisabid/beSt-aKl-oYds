const contextMock = ({
    Consumer(props) {
        return props.children({
            username : '',
            ws : null
        })
    }
});
export default contextMock;