import {Injectable} from '@angular/core';

@Injectable()
export class ErrorFormTipsService {
  showErrors(data) {
    Object.keys(data).map(key => {
      const findKeyWords = 'input[name="' + key + '"]';
      if (!this.hasAnyErrors(findKeyWords)) {
        const appendHtml = '<small class="help-block" data-bv-validator="emailAddress" data-bv-for="' +
          key + '" data-bv-result="INVALID" style="display: block;">' + data[key] + '</small>';
        $('.to-valid-form').find(findKeyWords).eq(0).parent().append(appendHtml);
      }
      if (!$('.to-valid-form').find(findKeyWords).eq(0).parents('.form-group').hasClass('has-error')) {
        $('.to-valid-form').find(findKeyWords).eq(0).parents('.form-group').addClass('has-error');
      }
    });
  }

  private hasAnyErrors(findKeyWords: string) {
    let hasError = false;
    $('.to-valid-form').find(findKeyWords).parent().find('small').each(function (index, ele) {
      if ($(ele).css('display') === 'block') {
        hasError = true;
      }
    });
    return hasError;
  }
}
