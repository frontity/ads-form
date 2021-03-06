import { postLoadFormat, preSaveFormat } from '../formats';

const databaseValues = {
  ads: {
    fills: [
      {
        name: 'ad_1',
        height: '600',
        type: 'doubleclick',
        slot: '/12345678/roba_doble',
        width: '300',
      },
      {
        name: 'ad_3',
        height: '250',
        type: 'doubleclick',
        slot: '/12345678/ad_roba',
        width: '300',
      },
    ],
  },
  slots: [
    {
      names: ['iframe'],
      position: 'some_theme_position',
      rules: {
        item: [{ type: 'post' }, { type: 'page' }],
      },
    },
    {
      names: ['ad_1'],
      position: 'some_theme_position',
      rules: {
        item: [{ type: 'post' }, { type: 'page' }],
      },
    },
    {
      names: ['ad_1'],
      position: 1,
      rules: {
        item: [{ type: 'media' }],
      },
    },
    {
      names: ['ad_3'],
      position: 'some_theme_position',
      rules: {
        item: [{ type: 'post' }, { type: 'page' }],
      },
    },
  ],
};

const formValues = {
  ads: {
    fills: [
      {
        name: 'ad_1',
        height: '600',
        positions: [
          {
            type: 'single',
            items: ['post', 'page'],
            position: 'some_theme_position',
          },
          { type: 'media', items: ['media'], position: 'some_theme_position' },
        ],
        type: 'doubleclick',
        slot: '/12345678/roba_doble',
        width: '300',
      },
      {
        name: 'ad_3',
        height: '250',
        positions: [
          {
            type: 'single',
            items: ['post', 'page'],
            position: 'some_theme_position',
          },
        ],
        type: 'doubleclick',
        slot: '/12345678/ad_roba',
        width: '300',
      },
    ],
  },
  slots: [
    {
      names: ['iframe'],
      position: 'some_theme_position',
      rules: {
        item: [{ type: 'post' }, { type: 'page' }],
      },
    },
  ],
};

describe('formats › postLoadFormat', () => {
  test('works as expected', () => {
    expect(postLoadFormat(databaseValues)).toMatchSnapshot();
  });
});

describe('formats › preSaveFormat', () => {
  test('works as expected', () => {
    expect(preSaveFormat(formValues, databaseValues)).toMatchSnapshot();
  });
});
