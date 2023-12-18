const {styled} =require("@mui/system");//reuse syle from css in components manner
const {Box} =require("@mui/system");

const FlexBetween=styled(Box)(
    {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

    }
)
export default FlexBetween;
