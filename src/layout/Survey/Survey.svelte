<script>
  import { onMount } from "svelte";
  import initSurvey from "./init-survey.js";

  onMount(initSurvey);
</script>

<div class="wrapper link-adjust">
  <div class="improve-this-page" data-module="improve-this-page">
    <div
      class="improve-this-page__prompt clearfix"
      id="feedback-form-header"
      role="status"
      aria-live="assertive"
      tabindex="-1"
    >
      <div class="improve-this-page__prompt_left">
        <h3 class="improve-this-page__is-useful-question margin-right--1">Is this page useful?</h3>
        <a
          id="feedback-form-yes"
          class="improve-this-page__page-is-useful-button"
          href="/feedback/thanks"
          aria-label="Yes I found this page useful">Yes</a
        >
        <span>|</span>
        <a
          id="feedback-form-no"
          class="js-toggle"
          href="/feedback"
          aria-label="No I didn't find this page useful">No</a
        >
      </div>
      <div class="improve-this-page__prompt_right">
        <a
          id="feedback-form-anything-wrong"
          class="js-toggle improve-this-page__anything-wrong"
          href="/feedback">Can't find what you're looking for?</a
        >
      </div>
    </div>
    <div id="feedback-form" class="improve-this-page__form js-hidden font-size--18">
      <form id="feedback-form-container">
        <input type="hidden" name="url" id="feedback-api-enabled" value="false" />
        <input type="hidden" name="url" id="feedback-api-url" value="" />
        <input type="hidden" name="feedback-form-type" value="footer" />
        <input
          type="hidden"
          name="url"
          id="feedback-form-url"
          value="https://www.ons.gov.uk/datasets/RM169/editions/2021/versions/4"
        />
        <div class="form-group">
          <label class="form-label-bold" id="description-field-label" for="description-field"
            >How should we improve this page?</label
          >
          <textarea
            id="description-field"
            class="form-control"
            name="description"
            rows="5"
            style="overflow: hidden; overflow-wrap: break-word; resize: horizontal;"></textarea>
        </div>
        <div class="form-group">
          <p class="font-size--24 font-weight-700 margin-bottom--0">Do you want a reply?</p>
          <p class="font-size--18 margin-top--0">
            If you'd like us to get back to you, please add your name and email address below.
          </p>
          <label class="form-label-bold" for="name-field">Name (optional)</label>
          <input id="name-field" class="form-control" type="text" name="name" />
        </div>
        <div class="form-group">
          <label class="form-label-bold" id="email-field-label" for="email-field"
            >Email (optional)</label
          >
          <input id="email-field" class="form-control" type="text" name="email" />
        </div>
        <div>
          <input
            id="feedback-form-submit"
            class="btn btn--primary font-weight-700 margin-bottom--2"
            type="submit"
            value="Send feedback"
          />
        </div>
        <div>
          <a
            href="javascript:void(0)"
            id="feedback-form-close"
            class="improve-this-page__close js-toggle btn btn--secondary font-weight-700"
            >I don't want to provide feedback</a
          >
        </div>
      </form>
    </div>
  </div>
</div>
