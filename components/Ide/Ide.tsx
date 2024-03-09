import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-textmate";
import AceEditor from "react-ace";

const Ide = ({
	code,
	setCode,
}: {
	code: string;
	setCode: (code: string) => void;
}) => {
	console.log(code);

	return (
		<AceEditor
			value={code}
			mode="javascript"
			theme="textmate"
			fontSize="14px"
			highlightActiveLine={true}
			setOptions={{
				enableLiveAutocompletion: true,
				showLineNumbers: true,
				tabSize: 2,
			}}
			style={{
				fontFamily: "Fira Code",
				width: "100%",
				height: "100%",
			}}
			onChange={(newCode) => setCode(newCode)}
		/>
	);
};

export default Ide;
