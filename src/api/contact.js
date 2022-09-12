import { PATHS } from "./config";
import sendRequest from "./sendRequest";

export function sendContact(contact, setError) {
    return sendRequest('POST', PATHS.CONTACT, contact, setError);
  }