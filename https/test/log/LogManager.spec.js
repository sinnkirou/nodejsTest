import { expect } from "chai";
import LogManager from "../../src/log/LogManager";

describe("Log Manager", () => {
	it("can get logger", () => {
		const logger = LogManager.getLogger();
		expect(logger).to.not.undefined;
	});

	it("can get console logger", () => {
		const logger = LogManager.getConsole();
		expect(logger).to.not.undefined;
	});
});
