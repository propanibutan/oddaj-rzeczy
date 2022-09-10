import { PATHS } from "./config";
import sendRequest from "./sendRequest";

export function sendContact(contact) {
    return sendRequest('POST', PATHS.CONTACT, contact);
  }