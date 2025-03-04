import component from './id-ID/component';
import globalHeader from './id-ID/globalHeader';
import menu from './id-ID/menu';
import pages from './id-ID/pages';
import pwa from './id-ID/pwa';
import responstatus from './id-ID/responstatus';
import settingDrawer from './id-ID/settingDrawer';
import settings from './id-ID/settings';

export default {
  'navBar.lang': 'Bahasa',
  'layout.user.link.help': 'Bantuan',
  'layout.user.link.privacy': 'Privasi',
  'layout.user.link.terms': 'Ketentuan',
  'app.copyright.produced': 'Produced by Drumbeat Technology Department',
  'app.preview.down.block': 'Unduh Halaman Ini Ke Proyek Lokal',
  'app.welcome.link.fetch-blocks': 'Dapatkan Semua Blok',
  'app.welcome.link.block-list': 'Berdasarkan Pengembangan Blok, Buat Halaman Standar Dengan Cepat',
  'layout.company': 'Drumbeat',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  ...responstatus,
};
