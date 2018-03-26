import Keen from "keen-js";
import config from "../config";

const KeenClient = () => {
	let instance;

	return {
		getInstance: () => {
			if (!instance) {
				instance = new Keen({
					projectId: config.keenProjectId,
					writeKey: config.keenWriteKey,
					readKey: config.keenReadKey
				});
			}
			return instance;
		}
	};
};

export default KeenClient().getInstance(); //singletone pattern