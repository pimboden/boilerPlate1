import { Icon } from '@progress/kendo-vue-common';
import { Dialog , DialogActionsBar} from '@progress/kendo-vue-dialogs';
import { Button, FloatingActionButton} from '@progress/kendo-vue-buttons';
import { MultiSelect,DropDownList, AutoComplete, ComboBox  } from '@progress/kendo-vue-dropdowns';
import { Input, Switch, NumericTextBox, TextArea, Checkbox, RadioGroup, RadioButton } from '@progress/kendo-vue-inputs';
import { Grid , GridToolbar, GridNoRecords} from '@progress/kendo-vue-grid';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { Label, FloatingLabel, Hint, Error } from '@progress/kendo-vue-labels';
import { Card, CardBody, CardTitle, CardActions} from "@progress/kendo-vue-layout";
import { Tooltip } from '@progress/kendo-vue-tooltip';
import { Form, Field, FormElement } from "@progress/kendo-vue-form";
import { Notification, NotificationGroup } from '@progress/kendo-vue-notification'
import { Fade } from '@progress/kendo-vue-animation'
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { IntlProvider, LocalizationProvider } from '@progress/kendo-vue-intl';
import {load, loadMessages,  } from '@progress/kendo-vue-intl';
import likelySubtags from 'cldr-core/supplemental/likelySubtags.json';
import currencyData from 'cldr-core/supplemental/currencyData.json';
import weekData from 'cldr-core/supplemental/weekData.json';
import deNumbers from 'cldr-numbers-full/main/de-CH/numbers.json';
import deCaGregorian from 'cldr-dates-full/main/de-CH/ca-gregorian.json';
import deDateFields from 'cldr-dates-full/main/de-CH/dateFields.json';
import deTimeZoneNames from 'cldr-dates-full/main/de-CH/timeZoneNames.json';
load(
  likelySubtags,
  currencyData,
  weekData, 
  deNumbers,
  deCaGregorian,
  deDateFields,
  deTimeZoneNames
);
export default defineNuxtPlugin((nuxtApp)=>{
  nuxtApp.vueApp.component("KIcon", Icon);
  nuxtApp.vueApp.component("KDialog", Dialog);
  nuxtApp.vueApp.component("KDialogActionsBar", DialogActionsBar);
  nuxtApp.vueApp.component("KButton", Button);
  nuxtApp.vueApp.component("KFab",FloatingActionButton);
  nuxtApp.vueApp.component("KMultiSelect", MultiSelect);
  nuxtApp.vueApp.component("KDropDownList", DropDownList);
  nuxtApp.vueApp.component("KAutoComplete", AutoComplete);
  nuxtApp.vueApp.component("KComboBox", ComboBox);
  nuxtApp.vueApp.component("KInput", Input);
  nuxtApp.vueApp.component("KSwitch", Switch);
  nuxtApp.vueApp.component("KNumericTextBox", NumericTextBox);
  nuxtApp.vueApp.component("KTextArea", TextArea);
  nuxtApp.vueApp.component("KCheckbox", Checkbox);
  nuxtApp.vueApp.component("KRadiogroup", RadioGroup);
  nuxtApp.vueApp.component("KRadioButton",RadioButton);
  nuxtApp.vueApp.component("KGrid", Grid);
  nuxtApp.vueApp.component("KGridToolbar", GridToolbar);
  nuxtApp.vueApp.component("KGridPdfExport", GridPdfExport);
  nuxtApp.vueApp.component("KGridNoRecords", GridNoRecords);
  nuxtApp.vueApp.component("KLabel", Label);
  nuxtApp.vueApp.component("KFloatingLabel", FloatingLabel);
  nuxtApp.vueApp.component("KHint", Hint);
  nuxtApp.vueApp.component("KError", Error);
  nuxtApp.vueApp.component("KTooltip", Tooltip);
  nuxtApp.vueApp.component("KForm", Form);
  nuxtApp.vueApp.component("KField", Field);
  nuxtApp.vueApp.component("KFormElement", FormElement);
  nuxtApp.vueApp.component("KNotification", Notification);
  nuxtApp.vueApp.component("KNotificationGroup", NotificationGroup);
  nuxtApp.vueApp.component("KFade", Fade);
  nuxtApp.vueApp.component("KDatePicker", DatePicker);
  nuxtApp.vueApp.component("KIntl", IntlProvider);
  nuxtApp.vueApp.component("KLocalization", LocalizationProvider);
  nuxtApp.vueApp.component("KCard", Card);
  nuxtApp.vueApp.component("KCardBody", CardBody);
  nuxtApp.vueApp.component("KCardTitle", CardTitle);
  nuxtApp.vueApp.component("KCardActions", CardActions);
})