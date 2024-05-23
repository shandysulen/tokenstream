export interface EtherscanContract {
  SourceCode: string;
  ABI: string;
  ContractName: string;
  CompilerVersion: string;
  OptimizationUsed: string;
  Runs: string;
  ConstructorArguments: string;
  EVMVersion: string;
  Library: string;
  LicenseType: string;
  Proxy: string;
  Implementation: string;
  SwarmSource: string;
}

export interface EtherscanBaseSuccessResponse {
  status: "1"; // 1 = Pass
  message: "OK";
}

export interface EtherscanBaseErrorResponse {
  status: "0"; // 0 = Error
  message: "NOTOK";
  result: string;
}

export interface EtherscanSourceCodeSuccessResponse
  extends EtherscanBaseSuccessResponse {
  result: EtherscanContract[];
}

export type EtherscanSourceCodeResponse =
  | EtherscanSourceCodeSuccessResponse
  | EtherscanBaseErrorResponse;
