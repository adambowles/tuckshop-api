import type { Application } from '../../declarations';
import { TransactionService } from './transactions.class';
import { transactionPath } from './transactions.shared';
export * from './transactions.class';
export * from './transactions.schema';
export declare const transaction: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [transactionPath]: TransactionService;
    }
}
