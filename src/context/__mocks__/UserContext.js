const contextMock = ({
    Consumer(props) {
        return props.children({
            username : '',
            ws : null,
            message : ''
        })
    }
});
export default contextMock;