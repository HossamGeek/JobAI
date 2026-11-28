import { HttpException, HttpStatus } from '@nestjs/common';

import { ErrorCode } from '../codes/error-codes';

export class AppException extends HttpException {
  constructor(
    message: string,
    status = HttpStatus.INTERNAL_SERVER_ERROR,
    code: ErrorCode = ErrorCode.Internal,
  ) {
    super({ code, message }, status);
  }
}
