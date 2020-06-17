/**
 * Internal dependencies
 */
import { registerReducer } from 'state/redux-store';
import mailchimpReducer from './reducer';

registerReducer( [ 'mailchimp' ], mailchimpReducer );