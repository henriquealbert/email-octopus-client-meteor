import fetch from "node-fetch";
import { Meteor } from "meteor/meteor";

/**
 * Class representing an EmailOctopus client.
 */
export class EmailOctopusClient {
  /**
   * Create an EmailOctopus client.
   * @param {string} apiKey - The API key for EmailOctopus.
   */
  constructor(apiKey) {
    /**
     * The API key for EmailOctopus.
     * @type {string}
     * @private
     */
    this.api_key = apiKey;

    /**
     * The base URL for the EmailOctopus API.
     * @type {string}
     * @private
     */
    this.apiBaseUrl = "https://emailoctopus.com/api/1.6";
  }

  /**
   * Make an API call to EmailOctopus.
   * @param {string} endpoint - The API endpoint to call.
   * @param {Object} data - The data to be sent in the API call.
   * @param {string} [method="POST"] - The HTTP method for the API call (GET, POST, etc.).
   * @returns {Promise<Object>} - A Promise that resolves to the JSON response from the API.
   * @throws {Meteor.Error} - Throws an error if the API call is not successful.
   * @private
   */
  async callApi(endpoint, data, method = "POST") {
    const url = this.apiBaseUrl + endpoint;

    const options = {
      method,
    };

    if (method === "POST") {
      options.body = JSON.stringify(data);
      options.headers = {
        "Content-Type": "application/json",
      };
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Meteor.Error(`Error making API call: ${response.statusText}`);
    }

    return response.json();
  }

  /**
   * Create a new contact in an EmailOctopus list.
   * @param {string} listId - The ID of the EmailOctopus list.
   * @param {Object} contactData - Data for the new contact.
   * @param {string} contactData.email - The email address of the contact.
   * @param {string} [contactData.firstName=""] - The first name of the contact.
   * @param {string} [contactData.lastName=""] - The last name of the contact.
   * @param {string} [contactData.username=""] - The username of the contact.
   * @param {string[]} contactData.tags - Tags associated with the contact.
   * @returns {Promise<void>} - A Promise that resolves when the contact is created successfully.
   */
  async createContact(listId, { email, firstName, lastName, tags, username }) {
    const endpoint = `/lists/${listId}/contacts`;
    const postData = {
      api_key: this.api_key,
      email_address: email,
      status: "SUBSCRIBED",
      fields: {
        FirstName: firstName || "",
        LastName: lastName || "",
        ...(username && { Username: username }),
      },
      tags: [...tags],
    };

    try {
      await this.callApi(endpoint, postData, "POST");
      console.log("Contact created with success");
    } catch (error) {
      console.error(error.message);
    }
  }
}
