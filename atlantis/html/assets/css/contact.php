<?php
/* Template Name:Contact*/
get_header();

get_template_part('template-parts/section', 'banner');

get_template_part('template-parts/section', 'vision_content');

$contact_details = get_field('contact_details');
if (!empty($contact_details)) : ?>

  <!-- ============================ -->
  <!-- CONTACT DETAILS -->
  <!-- ============================ -->
  <section class="contact_details cmn cmn_padding9 darkblue_bg1">
    <div class="container">
      <div class="map_details_wrap dark_bg">
        <?php if ($contact_details['address'] || $contact_details['email'] || $contact_details['phone']) : ?>
          <div class="map_content" data-aos="fade-up">
            <?php $address = $contact_details['address'];
            if (!empty($address)) : ?>
              <div class="address">
                <?php if ($address['icon']) : ?>
                  <span>
                    <img src="<?= $address['icon'] ?>" alt="">
                  </span>
                <?php endif; ?>
                <div class="cnt1">
                  <h4 class="text_sm2">
                    <?= $address['title'] ? $address['title'] : 'Address' ?>
                  </h4>
                  <p><?= $address['address'] ?></p>
                </div>
              </div>
            <?php endif;
            $email = $contact_details['email'];
            if (!empty($email)) : ?>
              <div class="email">
                <?php if ($email['icon']) : ?>
                  <span>
                    <img src="<?= $email['icon'] ?>" alt="">
                  </span>
                <?php endif; ?>
                <div class="cnt1">
                  <h4 class="text_sm2">
                    <?= $email['title'] ? $email['title'] : 'Email' ?>
                  </h4>
                  <ul>
                    <li>
                      <a href="mailto:<?= $email['email_1'] ?>">
                        <?= $email['email_1'] ?>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:<?= $email['email_2'] ?>">
                        <?= $email['email_2'] ?>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            <?php endif;
            $phone = $contact_details['phone'];
            if (!empty($phone)) : ?>
              <div class="phone">
                <?php if ($phone['icon']) : ?>
                  <span>
                    <img src="<?= $phone['icon'] ?>" alt="">
                  </span>
                <?php endif; ?>
                <div class="cnt1">
                  <h4 class="text_sm2">
                    <?= $phone['title'] ? $phone['title'] : 'PHONE' ?>
                  </h4>
                  <ul>
                    <li>
                      <a href="tel:<?= $phone['phone_1'] ?>">
                        <?= $phone['phone_1'] ?>
                      </a>
                    </li>
                    <li>
                      <a href="tel:<?= $phone['phone_2'] ?>">
                        <?= $phone['phone_2'] ?>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            <?php endif; ?>
          </div>
        <?php endif;
        if ($contact_details['map_iframe']) : ?>
          <div class="map_data">
            <?= $contact_details['map_iframe']; ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </section>
  <!-- --- -->
<?php endif;

get_footer() ?>