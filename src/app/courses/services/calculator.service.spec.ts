import { TestBed } from "@angular/core/testing";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {
  let calculator: CalculatorService, loggerSpy: any;
  /**
   * Note:
   * https://angular.io/guide/testing-services#angular-testbed
   */
  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj("LoggerService", ["log"]);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        { provide: LoggerService, useValue: loggerSpy },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    const result = calculator.add(2, 3);
    expect(result).toBe(5);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it("should subtract to numbers", () => {
    const result = calculator.subtract(3, 3);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
