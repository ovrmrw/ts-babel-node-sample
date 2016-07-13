#! /usr/bin/env node
'use strict';

require('..').registerBabel();

/* 
    replaced in order to run with ts-node 0.9.3.
*/
// require('ts-node/dist/bin/ts-node');
require('ts-node/dist/_bin');
