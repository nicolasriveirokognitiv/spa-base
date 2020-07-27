import ToolsetController from './ToolsetController';
import Title from './Title';
import Text from './Text';
import Description from './Description';
import BackgroundColor from './BackgroundColor';
import Border from './Border';
import BorderRadius from './BorderRadius';
import TextAlignment from './TextAlignment';
import Width from './Width';
import URL from './URL';
import FlexDirection from './FlexDirection';
import FlexAlignment from './FlexAlignment';
import UploadImage from './UploadImage';

const Tools = {
    Controller    : ToolsetController,
    Title,
    Text,
    Description,
    BackgroundColor,
    Border,
    BorderRadius,
    TextAlignment,
    Width,
    URL,
    FlexDirection,
    FlexAlignment,
    UploadImage,
    defaultValues : {
        title           : Title.defaultProps.defaultValue,
        text            : Text.defaultProps.defaultValue,
        description     : Description.defaultProps.defaultValue,
        backgroundColor : BackgroundColor.defaultProps.defaultValue,
        border          : Border.defaultProps.defaultValue,
        borderRadius    : BorderRadius.defaultProps.defaultValue,
        textAlignment   : TextAlignment.defaultProps.defaultValue,
        width           : Width.defaultProps.defaultValue,
        url             : URL.defaultProps.defaultValue,
        flexDirection   : FlexDirection.defaultProps.defaultValue,
        flexAlignment   : FlexAlignment.defaultProps.defaultValue,
        uploadImage     : UploadImage.defaultProps.defaultValue,
    },
};

// const defaultValues = Object.values(Tools)
//     .filter(tool => tool.defaultProps.defaultValue)
//     .reduce((prev, tool) => ({ ...prev, [tool.defaultProps.propertyKey]: tool.defaultProps.defaultValue }));

// export { defaultValues };

export default Tools;
