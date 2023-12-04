/**
 * Brevo API
 * Brevo provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/brevo  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: contact@brevo.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { CreateWhatsAppCampaignRecipients } from './createWhatsAppCampaignRecipients';

export class UpdateWhatsAppCampaign {
    /**
    * Name of the campaign
    */
    'campaignName'?: string;
    /**
    * Status of the campaign
    */
    'campaignStatus'?: UpdateWhatsAppCampaign.CampaignStatusEnum = UpdateWhatsAppCampaign.CampaignStatusEnum.Scheduled;
    /**
    * Reschedule the sending UTC date-time (YYYY-MM-DDTHH:mm:ss.SSSZ) of campaign. **Prefer to pass your timezone in date-time format for accurate result.For example: **2017-06-01T12:30:00+02:00** Use this field to update the scheduledAt of any existing draft or scheduled WhatsApp campaign. 
    */
    'rescheduleFor'?: string;
    'recipients'?: CreateWhatsAppCampaignRecipients;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "campaignName",
            "baseName": "campaignName",
            "type": "string"
        },
        {
            "name": "campaignStatus",
            "baseName": "campaignStatus",
            "type": "UpdateWhatsAppCampaign.CampaignStatusEnum"
        },
        {
            "name": "rescheduleFor",
            "baseName": "rescheduleFor",
            "type": "string"
        },
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "CreateWhatsAppCampaignRecipients"
        }    ];

    static getAttributeTypeMap() {
        return UpdateWhatsAppCampaign.attributeTypeMap;
    }
}

export namespace UpdateWhatsAppCampaign {
    export enum CampaignStatusEnum {
        Scheduled = <any> 'scheduled',
        Suspended = <any> 'suspended'
    }
}