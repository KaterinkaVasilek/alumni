export default function ({ $axios }, inject) {
  const BASE = process.env.baseUrl;
  const VER = process.env.version;

  const api = {
    project: {
      sections: {
        async get(version, limit, withItems) {
          const params = {};
          let res = null;

          if(limit) params['page[limit]'] = limit;
          try{
            res = await $axios.get(`${BASE}projects/sections`, {
              headers: {
                version: version || VER,
              },
              params,
            });
          } catch (e) {
            console.error(`Ошибка получения project sections ${e}`);
          }

          return res?.data || null;
        }
      },
      items: {
        async get(version, section, isFormShow, limit) {
          const params = {};
          let res = null;

          if(limit) params['page[limit]'] = limit;
          if(section) params['filter[section]'] = section;
          if(typeof isFormShow === 'boolean') params['filter[isFormShow]'] = isFormShow;

          try{
            res = await $axios.get(`${BASE}projects/items`, {
              headers: {
                version: version || VER,
              },
              params,
            });
          } catch (e) {
            console.error(`Ошибка получения project items ${e}`);
          }

          return res?.data || null;
        }
      },
      item: {
        async get(version, code) {
          let res = null;

          try{
            res = await $axios.get(`${BASE}projects/items/${code}`, {
              headers: {
                version: version || VER,
              },
            });
          } catch (e) {
            console.error(`Ошибка получения project item, code - ${code} ${e}`);
          }

          return res?.data || null;
        }
      },
    },
    events: {
      async get(version, limit, page, sort) {
        const params = {};
        let res = null;

        if(limit) params['page[limit]'] = limit;
        if(page) params['page[number]'] = page;
        if(sort) params['order[by]'] = sort;

        try{
          res = await $axios.get(`${BASE}events/`, {
            headers: {
              version: version || VER,
            },
            params,
          });
        } catch (e) {
          console.error(`Ошибка получения events ${e}`);
        }

        return res?.data || null;
      }
    },
    event: {
      async get(version, id) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}events/${id}`, {
            headers: {
              version: version || VER,
            },
          });
        } catch (e) {
          console.error(`Ошибка получения event ${e}`);
        }

        return res?.data.item || null;
      },
    },
    about_text: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screenclub-1-item-1',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения about text ${e}`);
        }

        return res?.data?.items[0].text || null;
      },
    },
    donate: {
      description: {
        async get(version) {
          let res = null;
          try {
            res = await $axios.get(`${BASE}texts/`, {
              headers: {
                version: version || VER,
              },
              params: {
                'filter[code]': 'screensupport-1-item-1',
              },
            });
          } catch (e) {
            console.error(`Ошибка получения donate description ${e}`);
          }

          return res?.data?.items[0].text || null;
        },
      },
    },
    docs: {
      async get(version) {
        let res = null;
        try {
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screensupport-2-item-2,screensupport-2-item-3,screensupport-2-item-4,screensupport-2-item-5',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения docs ${e}`);
        }

        return [
          {
            name: res?.data?.items.filter(el => el.code === 'screensupport-2-item-2')[0]?.text || '',
            url: res?.data?.items.filter(el => el.code === 'screensupport-2-item-3')[0]?.text || '',
          },
          {
            name: res?.data?.items.filter(el => el.code === 'screensupport-2-item-4')[0]?.text || '',
            url: res?.data?.items.filter(el => el.code === 'screensupport-2-item-5')[0]?.text || '',
          },
        ] || null;
      },
    },
    contract: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screensupport-2-item-1',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения contract ${e}`);
        }

        return res?.data?.items[0].text || null;
      },
    },
    contract_partners: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screensupport-4-item-10,' +
                'screensupport-4-item-11,' +
                'screensupport-4-item-9,' +
                'screensupport-4-item-8,' +
                'screensupport-4-item-5,' +
                'ekran-4-dolzhnost,',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения contract ${e}`);
        }

        return {
          presentation: res?.data?.items.filter(el => el.code === 'screensupport-4-item-5')[0]?.text || '',
          post: res?.data?.items.filter(el => el.code === 'ekran-4-dolzhnost')[0]?.text || '',
          email: {
            link: res?.data?.items.filter(el => el.code === 'screensupport-4-item-11')[0]?.text || '',
            text: res?.data?.items.filter(el => el.code === 'screensupport-4-item-10')[0]?.text || '',
          },
          phone: {
            link: res?.data?.items.filter(el => el.code === 'screensupport-4-item-8')[0]?.text || '',
            text: res?.data?.items.filter(el => el.code === 'screensupport-4-item-9')[0]?.text || '',
          },
        } || null;
      },
    },
    company_help: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screensupport-3-item-1,' +
                'screensupport-3-item-2,' +
                'screensupport-3-item-3,' +
                'screensupport-3-item-4,' +
                'screensupport-3-item-5,' +
                'screensupport-4-item-1,' +
                'screensupport-4-item-2,' +
                'screensupport-4-item-3,' +
                'screensupport-4-item-4',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения company help description ${e}`);
        }

        return {
          description: res?.data?.items.filter(el => el.code === 'screensupport-3-item-1')[0]?.text || '',
          list: {
            default: [
              res?.data?.items.filter(el => el.code === 'screensupport-3-item-2')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-3-item-3')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-3-item-4')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-3-item-5')[0]?.text || '',
            ],
            joy: [
              res?.data?.items.filter(el => el.code === 'screensupport-4-item-1')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-4-item-2')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-4-item-3')[0]?.text || '',
              res?.data?.items.filter(el => el.code === 'screensupport-4-item-4')[0]?.text || '',
            ],
          },
        } || null;
      },
    },
    form: {
      async alumni_f1({name, lastName, email, question, consent}) {
        let res = null;
        try{
          res = await $axios.$post(`${process.env.baseUrl}form/alumni_f1`,
            {
              name: name,
              lastName: lastName,
              email: email,
              question: question,
              consent: consent,
            },
            {
              headers: {version: process.env.version}
            }
          );
        } catch (e) {
          console.error(`Ошибка отправки формы alumni_f1 ${e}`);
        }

        return res?.data || null;
      },
      async alumni_f2({name, lastName, email, phone, project, donation, consent, inoagentFree, showName, responseSuccess, responseFail}) {
        let res = null;
        try{
          res = await $axios.$post(`${process.env.baseUrl}form/alumni_f2`,
            {
              name,
              lastName,
              email,
              project,
              phone,
              donation,
              consent,
              inoagentFree,
              showName,
              responseSuccess,
              responseFail,
            },
            {
              headers: {version: process.env.version}
            }
          );
        } catch (e) {
          console.error(`Ошибка отправки формы alumni_f2 ${e}`);
        }

        return res?.data || null;
      },
      async alumni_f3(formData) {
        let res = null;
        try{
          res = await $axios.$post(`${process.env.baseUrl}form/alumni_f3`,
            formData,
            {
              headers: {version: process.env.version}
            }
          );
        } catch (e) {
          console.error(`Ошибка отправки формы alumni_f1 ${e}`);
        }

        return res?.data || null;
      },
      async alumni_f4({name, phone, consent}) {
        let res = null;
        try{
          res = await $axios.$post(`${process.env.baseUrl}form/alumni_f4`,
            {
              name,
              phone,
              consent,
            },
            {
              headers: {version: process.env.version}
            }
          );
        } catch (e) {
          console.error(`Ошибка отправки формы alumni_f4 ${e}`);
        }

        return res?.data || null;
      },
    },
    footer: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'email,phone,phone-link,vk-link,telegram-link',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения footer ${e}`);
        }

        return {
          email: res?.data?.items.filter(el => el.code === 'email')[0]?.text || '',
          phone: {
            text: res?.data?.items.filter(el => el.code === 'phone')[0]?.text || '',
            link: res?.data?.items.filter(el => el.code === 'phone-link')[0]?.text || '',
          },
          social: {
            vk: res?.data?.items.filter(el => el.code === 'vk-link')[0]?.text || '',
            telegram: res?.data?.items.filter(el => el.code === 'telegram-link')[0]?.text || '',
          },
        } || null;
      },
    },
    mission: {
      main: {
        async get(version) {
          let res = null;
          try {
            res = await $axios.get(`${BASE}texts/`, {
              headers: {
                version: version || VER,
              },
              params: {
                'filter[code]': 'screen-2-item-2,screen-2-item-1',
              },
            });
          } catch (e) {
            console.error(`Ошибка получения mission main ${e}`);
          }

          return {
            src: res?.data?.items.filter(el => el.code === 'screen-2-item-2')[0]?.text || '',
            description: res?.data?.items.filter(el => el.code === 'screen-2-item-1')[0]?.text || '',
          } || null;
        },
      },
      about: {
        async get(version) {
          let res = null;
          try {
            res = await $axios.get(`${BASE}texts/`, {
              headers: {
                version: version || VER,
              },
              params: {
                'filter[code]': 'screenclub-2-item-2,screenclub-2-item-1',
              },
            });
          } catch (e) {
            console.error(`Ошибка получения mission about ${e}`);
          }

          return {
            src: res?.data?.items.filter(el => el.code === 'screenclub-2-item-1')[0]?.text || '',
            description: res?.data?.items.filter(el => el.code === 'screenclub-2-item-2')[0]?.text || '',
          } || null;
        },
      }
    },
    team: {
      async get(version, limit) {
        const params = {};
        let res = null;

        if(typeof limit === 'number') params['page[limit]'] = limit;
        try{
          res = await $axios.get(`${BASE}team/`, {
            headers: {
              version: version || VER,
            },
            params,
          });
        } catch (e) {
          console.error(`Ошибка получения team ${e}`);
        }

        return res?.data || null;
      },
    },
    members: {
      async get(version, limit, sortBy) {
        const params = {};
        let res = null;

        if(typeof limit === 'number') params['page[limit]'] = limit;
        if(sortBy) params['order[by]'] = sortBy;
        try{
          res = await $axios.get(`${BASE}members/`, {
            headers: {
              version: version || VER,
            },
            params,
          });
        } catch (e) {
          console.error(`Ошибка получения members ${e}`);
        }

        return res?.data || null;
      },
    },
    banner: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screen-1-item-1',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения banner ${e}`);
        }

        return res?.data || null;
      },
    },
    causes: {
      async get(version) {
        let res = null;

        try{
          res = await $axios.get(`${BASE}texts/`, {
            headers: {
              version: version || VER,
            },
            params: {
              'filter[code]': 'screen-3-item-10,' +
                'screen-3-item-9,' +
                'screen-3-item-8,' +
                'screen-3-item-7,' +
                'screen-3-item-6,' +
                'screen-3-item-5,' +
                'screen-3-item-4,' +
                'screen-3-item-3,' +
                'screen-3-item-2,' +
                'screen-3-item-1',
            },
          });
        } catch (e) {
          console.error(`Ошибка получения causes ${e}`);
        }

        return res?.data || null;
      },
    },
    faq: {
      async get(version) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}faq/`, {
            headers: {
              version: version || VER,
            },
          });
        } catch (e) {
          console.error(`Ошибка получения faq ${e}`);
        }
        return res?.data || null;
      },
    },
    councils: {
      async get(version, limit) {
        const params = {};
        let res = null;

        if(typeof limit === 'number') params['page[limit]'] = limit;
        try {
          res = await $axios.get(`${BASE}council/`, {
            headers: {
              version: version || VER,
            },
            params,
          });
        } catch (e) {
          console.error(`Ошибка получения council ${e}`);
        }

        return res?.data || null;
      },
    },
    news: {
      async get(version, limit, page, section) {
        const params = {

        };
        let res = null;

        if(limit) params['page[limit]'] = limit;
        if(page) params['page[number]'] = page;
        if(page) params['filter[section]'] = section;

        try{
          res = await $axios.get(`${BASE}news/`, {
            headers: {
              version: version || VER,
            },
            params,
          });
        } catch (e) {
          console.error(`Ошибка получения news ${e}`);
        }

        return res?.data || null;
      },
    },
    news_item: {
      async get(version, id) {
        let res = null;
        try{
          res = await $axios.get(`${BASE}news/${id}`, {
            headers: {
              version: version || VER,
            },
          });
        } catch (e) {
          console.error(`Ошибка получения event ${e}`);
        }

        return res?.data.item || null;
      },
    },
    dictionaries: {
      async get() {
        let res = null;
        try{
          res = await $axios.get(`${BASE}lkapi/dictionaries`, {
            headers: {
              version: VER,
            },
          });
        } catch (e) {
          console.error(`Ошибка получения справочников ${e}`);
        }
        return res?.data || null;
      }
    }
  };

  inject('api', api)
}
