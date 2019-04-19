import { expect } from "chai";
import Logger from "../../src/log/Logger";

describe("Logger", () => {
	context("When no inner logger", () => {
		it("will not log info", () => {
			const logger = new Logger(null);
			logger.info("testing");
		});

		it("will not log warning", () => {
			const logger = new Logger(null);
			logger.warn("testing");
		});

		it("will not log debug", () => {
			const logger = new Logger(null);
			logger.debug("testing");
		});

		it("will not log error", () => {
			const logger = new Logger(null);
			logger.error("testing");
		});
	});

	context("When no inner logger", () => {
		it("will not log info", () => {
			let result = false;
			let message = null;
			const innerLogger = {
				log(msg) {
					result = true;
					message = msg;
				}
			};
			const logger = new Logger(innerLogger);
			logger.info("testing");
			expect(result).to.true;
			expect(message).to.equal("info");
		});

		it("will not log warning", () => {
			let result = false;
			let message = null;
			const innerLogger = {
				log(msg) {
					result = true;
					message = msg;
				}
			};
			const logger = new Logger(innerLogger);
			logger.warn("message");
			expect(result).to.true;
			expect(message).to.equal("warn");
		});

		it("will not log debug", () => {
			let result = false;
			let message = null;
			const innerLogger = {
				log(msg) {
					result = true;
					message = msg;
				}
			};
			const logger = new Logger(innerLogger);
			logger.debug("message");
			expect(result).to.true;
			expect(message).to.equal("debug");
		});

		it("will not log error", () => {
			let result = false;
			let message = null;
			const innerLogger = {
				log(msg) {
					result = true;
					message = msg;
				}
			};
			const logger = new Logger(innerLogger);
			logger.error("message");
			expect(result).to.true;
			expect(message).to.equal("error");
		});

		it("will not log error with detail", () => {
			let result = false;
			let message = null;
			const innerLogger = {
				log(msg) {
					result = true;
					message = msg;
				}
			};
			const logger = new Logger(innerLogger);
			logger.error("message", {
				message: "error",
				stack: "stack"
			});
			expect(result).to.true;
			expect(message).to.equal("error");
		});
	});
});
