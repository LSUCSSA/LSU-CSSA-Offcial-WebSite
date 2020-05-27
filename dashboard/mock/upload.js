const parse = require('csv-parse');

export default {
  'POST /api/bulkcreate': (req, res) => {
    const rosterFile = req.files[0];
    if (rosterFile.size !== 0) {
      const roster = rosterFile.buffer.toString();
      parse(roster, { from_line: 4 }, (err, out) => {
        if (!out[0] || out[0].indexOf('First Name') <= -1 || out[0].indexOf('Last Name') <= -1) {
          return res.send({
            status: 'fail',
            message: '文件格式不正确, 缺少First Name或Last Name列',
          });
        }
        res.send({
          status: 'success',
        });
      });
    } else {
      res.send({
        status: 'fail',
      });
    }
  },
};
