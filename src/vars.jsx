/*
This file is part of cockpit-suricata.
Copyright (C) 2021 NTNU, Seksjon for Digital sikkerhet.

Original Authors:
    Anders Svarverud
    Said-Emin Evmurzajev
    Sigve Sudland
    Sindre Morvik

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

global.SuricataFileName = 'suricata.yaml';

// Config.jsx
global.SuricataFullFilePath = `/etc/suricata/${global.SuricataFileName}`;

global.updateYamlKeys = [
  'enable-conf',
  'disable-conf',
  'modify-conf',
  'drop-conf',
  'user-agent',
  'test-command',
  'reload-command',
  'drop',
  'sources',
  'local',
  'classification-file',
];

global.suricataYamlKeys = [
  'vars',
  'default-log-dir',
  'stats',
  'outputs',
  'logging',
  'af-packet',
  'pcap',
  'pcap-file',
  'app-layer',
  'asn1-max-frames',
  'coredump',
  'host-mode',
  'unix-command',
  'legacy',
  'engine-analysis',
  'pcre',
  'host-os-policy',
  'defrag',
  'flow',
  'vlan',
  'flow-timeouts',
  'stream',
  'host',
  'decoder',
  'detect',
  'mpm-algo',
  'spm-algo',
  'threading',
  'luajit',
  'profiling',
  'nfq',
  'nflog',
  'capture',
  'netmap',
  'pfring',
  'ipfw',
  'napatech',
  'default-rule-path',
  'rule-files',
  'classification-file',
  'reference-config-file',
];
global.updateYamlConfigFiles = ['enable-conf', 'disable-conf', 'modify-conf', 'drop-conf'];

global.defaultSuricataYaml =
  '{"vars":{"address-groups":{"HOME_NET":"[192.168.0.0/16,10.0.0.0/8,172.16.0.0/12]","EXTERNAL_NET":"!$HOME_NET","HTTP_SERVERS":"$HOME_NET","SMTP_SERVERS":"$HOME_NET","SQL_SERVERS":"$HOME_NET","DNS_SERVERS":"$HOME_NET","TELNET_SERVERS":"$HOME_NET","AIM_SERVERS":"$EXTERNAL_NET","DC_SERVERS":"$HOME_NET","DNP3_SERVER":"$HOME_NET","DNP3_CLIENT":"$HOME_NET","MODBUS_CLIENT":"$HOME_NET","MODBUS_SERVER":"$HOME_NET","ENIP_CLIENT":"$HOME_NET","ENIP_SERVER":"$HOME_NET"},"port-groups":{"HTTP_PORTS":"80","SHELLCODE_PORTS":"!80","ORACLE_PORTS":1521,"SSH_PORTS":22,"DNP3_PORTS":20000,"MODBUS_PORTS":502,"FILE_DATA_PORTS":"[$HTTP_PORTS,110,143]","FTP_PORTS":21,"GENEVE_PORTS":6081,"VXLAN_PORTS":4789,"TEREDO_PORTS":3544}},"default-log-dir":"/var/log/suricata/","stats":{"enabled":"yes","interval":8},"outputs":[{"fast":{"enabled":"yes","filename":"fast.log","append":"yes"}},{"eve-log":{"enabled":"yes","filetype":"regular","filename":"eve.json","pcap-file":false,"community-id":false,"community-id-seed":0,"xff":{"enabled":"no","mode":"extra-data","deployment":"reverse","header":"X-Forwarded-For"},"types":[{"alert":{"tagged-packets":"yes"}},{"anomaly":{"enabled":"yes","types":null}},{"http":{"extended":"yes"}},{"dns":null},{"tls":{"extended":"yes"}},{"files":{"force-magic":"no"}},{"smtp":null},"ftp","rdp","nfs","smb","tftp","ikev2","dcerpc","krb5","snmp","rfb","sip",{"dhcp":{"enabled":"yes","extended":"no"}},"ssh",{"mqtt":null},{"stats":{"totals":"yes","threads":"no","deltas":"no"}},"flow"]}},{"http-log":{"enabled":"no","filename":"http.log","append":"yes"}},{"tls-log":{"enabled":"no","filename":"tls.log","append":"yes"}},{"tls-store":{"enabled":"no"}},{"pcap-log":{"enabled":"no","filename":"log.pcap","limit":"1000mb","max-files":2000,"compression":"none","mode":"normal","use-stream-depth":"no","honor-pass-rules":"no"}},{"alert-debug":{"enabled":"no","filename":"alert-debug.log","append":"yes"}},{"alert-prelude":{"enabled":"no","profile":"suricata","log-packet-content":"no","log-packet-header":"yes"}},{"stats":{"enabled":"yes","filename":"stats.log","append":"yes","totals":"yes","threads":"no"}},{"syslog":{"enabled":"no","facility":"local5"}},{"file-store":{"version":2,"enabled":"no","xff":{"enabled":"no","mode":"extra-data","deployment":"reverse","header":"X-Forwarded-For"}}},{"tcp-data":{"enabled":"no","type":"file","filename":"tcp-data.log"}},{"http-body-data":{"enabled":"no","type":"file","filename":"http-data.log"}},{"lua":{"enabled":"no","scripts":null}}],"logging":{"default-log-level":"notice","default-output-filter":null,"outputs":[{"console":{"enabled":"yes"}},{"file":{"enabled":"yes","level":"info","filename":"suricata.log"}},{"syslog":{"enabled":"no","facility":"local5","format":"[%i] <%d> -- "}}]},"af-packet":[{"interface":"eth0","cluster-id":99,"cluster-type":"cluster_flow","defrag":"yes"},{"interface":"default"}],"pcap":[{"interface":"eth0"},{"interface":"default"}],"pcap-file":{"checksum-checks":"auto"},"app-layer":{"protocols":{"rfb":{"enabled":"yes","detection-ports":{"dp":"5900, 5901, 5902, 5903, 5904, 5905, 5906, 5907, 5908, 5909"}},"mqtt":null,"krb5":{"enabled":"yes"},"snmp":{"enabled":"yes"},"ikev2":{"enabled":"yes"},"tls":{"enabled":"yes","detection-ports":{"dp":443}},"dcerpc":{"enabled":"yes"},"ftp":{"enabled":"yes"},"rdp":null,"ssh":{"enabled":"yes"},"http2":{"enabled":"no"},"smtp":{"enabled":"yes","raw-extraction":"no","mime":{"decode-mime":"yes","decode-base64":"yes","decode-quoted-printable":"yes","header-value-depth":2000,"extract-urls":"yes","body-md5":"no"},"inspected-tracker":{"content-limit":100000,"content-inspect-min-size":32768,"content-inspect-window":4096}},"imap":{"enabled":"detection-only"},"smb":{"enabled":"yes","detection-ports":{"dp":"139, 445"}},"nfs":{"enabled":"yes"},"tftp":{"enabled":"yes"},"dns":{"tcp":{"enabled":"yes","detection-ports":{"dp":53}},"udp":{"enabled":"yes","detection-ports":{"dp":53}}},"http":{"enabled":"yes","libhtp":{"default-config":{"personality":"IDS","request-body-limit":"100kb","response-body-limit":"100kb","request-body-minimal-inspect-size":"32kb","request-body-inspect-window":"4kb","response-body-minimal-inspect-size":"40kb","response-body-inspect-window":"16kb","response-body-decompress-layer-limit":2,"http-body-inline":"auto","swf-decompression":{"enabled":"yes","type":"both","compress-depth":"100kb","decompress-depth":"100kb"},"double-decode-path":"no","double-decode-query":"no"},"server-config":null}},"modbus":{"enabled":"no","detection-ports":{"dp":502},"stream-depth":0},"dnp3":{"enabled":"no","detection-ports":{"dp":20000}},"enip":{"enabled":"no","detection-ports":{"dp":44818,"sp":44818}},"ntp":{"enabled":"yes"},"dhcp":{"enabled":"yes"},"sip":null}},"asn1-max-frames":256,"coredump":{"max-dump":"unlimited"},"host-mode":"auto","unix-command":{"enabled":"auto"},"legacy":{"uricontent":"enabled"},"engine-analysis":{"rules-fast-pattern":"yes","rules":"yes"},"pcre":{"match-limit":3500,"match-limit-recursion":1500},"host-os-policy":{"windows":["0.0.0.0/0"],"bsd":[],"bsd-right":[],"old-linux":[],"linux":[],"old-solaris":[],"solaris":[],"hpux10":[],"hpux11":[],"irix":[],"macos":[],"vista":[],"windows2k3":[]},"defrag":{"memcap":"32mb","hash-size":65536,"trackers":65535,"max-frags":65535,"prealloc":"yes","timeout":60},"flow":{"memcap":"128mb","hash-size":65536,"prealloc":10000,"emergency-recovery":30},"vlan":{"use-for-tracking":true},"flow-timeouts":{"default":{"new":30,"established":300,"closed":0,"bypassed":100,"emergency-new":10,"emergency-established":100,"emergency-closed":0,"emergency-bypassed":50},"tcp":{"new":60,"established":600,"closed":60,"bypassed":100,"emergency-new":5,"emergency-established":100,"emergency-closed":10,"emergency-bypassed":50},"udp":{"new":30,"established":300,"bypassed":100,"emergency-new":10,"emergency-established":100,"emergency-bypassed":50},"icmp":{"new":30,"established":300,"bypassed":100,"emergency-new":10,"emergency-established":100,"emergency-bypassed":50}},"stream":{"memcap":"64mb","checksum-validation":"yes","inline":"auto","reassembly":{"memcap":"256mb","depth":"1mb","toserver-chunk-size":2560,"toclient-chunk-size":2560,"randomize-chunk-size":"yes"}},"host":{"hash-size":4096,"prealloc":1000,"memcap":"32mb"},"decoder":{"teredo":{"enabled":true,"ports":"$TEREDO_PORTS"},"vxlan":{"enabled":true,"ports":"$VXLAN_PORTS"},"geneve":{"enabled":true,"ports":"$GENEVE_PORTS"}},"detect":{"profile":"medium","custom-values":{"toclient-groups":3,"toserver-groups":25},"sgh-mpm-context":"auto","inspection-recursion-limit":3000,"prefilter":{"default":"mpm"},"grouping":null,"profiling":{"grouping":{"dump-to-disk":false,"include-rules":false,"include-mpm-stats":false}}},"mpm-algo":"auto","spm-algo":"auto","threading":{"set-cpu-affinity":"no","cpu-affinity":[{"management-cpu-set":{"cpu":[0]}},{"receive-cpu-set":{"cpu":[0]}},{"worker-cpu-set":{"cpu":["all"],"mode":"exclusive","prio":{"low":[0],"medium":["1-2"],"high":[3],"default":"medium"}}}],"detect-thread-ratio":1},"luajit":{"states":128},"profiling":{"rules":{"enabled":"yes","filename":"rule_perf.log","append":"yes","limit":10,"json":"yes"},"keywords":{"enabled":"yes","filename":"keyword_perf.log","append":"yes"},"prefilter":{"enabled":"yes","filename":"prefilter_perf.log","append":"yes"},"rulegroups":{"enabled":"yes","filename":"rule_group_perf.log","append":"yes"},"packets":{"enabled":"yes","filename":"packet_stats.log","append":"yes","csv":{"enabled":"no","filename":"packet_stats.csv"}},"locks":{"enabled":"no","filename":"lock_stats.log","append":"yes"},"pcap-log":{"enabled":"no","filename":"pcaplog_stats.log","append":"yes"}},"nfq":null,"nflog":[{"group":2,"buffer-size":18432},{"group":"default","qthreshold":1,"qtimeout":100,"max-size":20000}],"capture":null,"netmap":[{"interface":"eth2"},{"interface":"default"}],"pfring":[{"interface":"eth0","threads":"auto","cluster-id":99,"cluster-type":"cluster_flow"},{"interface":"default"}],"ipfw":null,"napatech":{"streams":["0-3"],"enable-stream-stats":"no","auto-config":"yes","hardware-bypass":"yes","inline":"no","ports":["0-1","2-3"],"hashmode":"hash5tuplesorted"},"default-rule-path":"/var/lib/suricata/rules","rule-files":["suricata.rules"],"classification-file":"/etc/suricata/classification.config","reference-config-file":"/etc/suricata/reference.config"}';

global.defaultUpdateYaml =
  '{"disable-conf":"/etc/suricata/disable.conf","enable-conf":"/etc/suricata/enable.conf","drop-conf":"/etc/suricata/drop.conf","modify-conf":"/etc/suricata/modify.conf","ignore":["*deleted.rules"],"sources":["https://rules.emergingthreats.net/open/suricata-%(__version__)s/emerging.rules.tar.gz","https://sslbl.abuse.ch/blacklist/sslblacklist.rules"],"local":["/etc/suricata/rules","/etc/suricata/rules/app-layer-events.rules","/etc/suricata/rules/*.rules"]}';

// Some array objects are treated like literals strings in suricata
global.fakeArray = ['napatech.streams', 'napatech.ports', 'host-os-policy.windows'];

global.suricataYamlToggleable = {
  pfring: ['bpf-filter', 'bypass', 'checksum-checks'],
  stats: ['decoder-events', 'decoder-events-prefix', 'stream-events'],
  outputs: {
    'eve-log': {
      enabled: {
        ph: 'true',
        desc: 'Disable or enable eve-logging',
        tg: false,
      },
      filetype: {
        ph: 'regular',
        desc: '#regular|syslog|unix_dgram|unix_stream|redis',
        tg: false,
      },
      filename: {
        ph: 'eve-log',
        desc: 'Name of the file',
        tg: false,
      },
      threaded: {
        ph: 'false',
        desc:
          'Enable for multi-threaded eve.json output; output files are amended with an identifier, e.g., eve.9.json',
        tg: true,
      },
      prefix: {
        ph: '"@cee"',
        desc: 'Prefix to prepend to each log entry',
        tg: true,
      },
      level: {
        ph: 'info',
        desc: 'possible levels: Emergency, Alert, Critical, Error, Warning, Notice, Info, Debug',
        tg: true,
      },
      redis: {
        tg: true,
        server: {
          ph: '127.0.0.1',
          desc: 'IP address of the redis server',
          tg: false,
        },
        port: {
          ph: '6379',
          desc: 'Port of the redis server',
          tg: false,
        },
        async: {
          ph: 'true',
          desc: 'if redis replies are read asynchronously',
          tg: false,
        },
        mode: {
          ph: 'lpush',
          desc: 'possible values: list|lpush (default), rpush, channel|publish',
          tg: false,
        },
        key: {
          ph: 'suricata',
          desc: 'key or channel to use (default to suricata)',
          tg: false,
        },
        pipelining: {
          desc:
            "Redis pipelining set up. This will enable to only do a query every 'batch-size' events. This should lower the latency induced by network connection at the cost of some memory. There is no flushing implemented so this setting should be reserved to high traffic Suricata deployments.",
          enabled: {
            ph: 'yes',
            desc: 'set enable to yes to enable query pipelining',
            tg: false,
          },
          'batch-size': {
            ph: '10',
            desc: 'number of entries to keep in buffer',
            tg: false,
          },
        },
      },
    },
  },
};
// Specify which is a table
global.suricataYamlTables = {
  vars: { 'address-groups': [], 'port-groups': [] },
  'rule-files': [],
  'af-packet': [],
  pfring: [],
  pcap: [],
  sources: [],
  local: [],
};
// Title for the tables
global.suricataYamlTitles = {
  vars: { 'address-groups': 'Address groups', 'port-groups': 'Port groups' },
  'rule-files': '',
  'af-packet': '',
  pcap: '',
  sources: 'List of remote URLs',
  local: 'List of local rules files',
  profiling: { rules: 'rules' },
};
// Column titles of for tables
global.suricataYamlTablesColumns = {
  vars: { 'address-groups': ['Name:', 'IP-address:'], 'port-groups': ['Name:', 'Ports:'] },
  'rule-files': ['Filename'],
  'af-packet': [
    'Interface',
    'Cluster-id',
    'Cluster-type',
    'defrag',
    'use-mmap',
    'mmap-locked',
    'tpacket-v3',
    'ring-size',
    'block-size',
    'block-timeout',
    'use-emergency-flush',
    'checksum-checks',
    'bpf-filter',
    'copy-mode',
    'copy-iface',
  ],
  pfring: [
    'interface',
    'threads',
    'cluster-id',
    'cluster-type',
    'bpf-filter',
    'bypass',
    'checksum-checks',
    'threads',
    'cluster-id',
    'cluster-type',
    'bpf-filter',
    'bypass',
    'checksum-checks',
  ],
  pcap: [
    'Interface',
    'Buffer-size',
    'bpf-filter',
    'checksum-checks',
    'threads',
    'promisc',
    'snaplen',
  ],
  sources: ['Url'],
  local: ['Local rules file'],
};
