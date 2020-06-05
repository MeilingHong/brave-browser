/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at https://mozilla.org/MPL/2.0/. */

const config = require('../lib/config')
const util = require('../lib/util')

let cmdOptions = {
  shell: process.platform === 'win32'
}
util.run('ninja', ['-C', config.outputDir, "brave:audit_deps"], cmdOptions)
